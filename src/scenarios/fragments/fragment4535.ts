import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4533 } from "./fragment4533";
import type { FragmentToken4534 } from "./fragment4534";

export const FRAGMENT_4535 = gql(`
  fragment Fragment4535 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult4535 = ResultOf<typeof FRAGMENT_4535>;
type FragmentSelf4535 = NonNullable<FragmentResult4535>;

export type FragmentToken4535 =
  | FragmentSelf4535["__typename"]
  | FragmentSelf4535["typenameHint"] | FragmentToken4533 | FragmentToken4534;
