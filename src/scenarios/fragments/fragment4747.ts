import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4745 } from "./fragment4745";
import type { FragmentToken4746 } from "./fragment4746";

export const FRAGMENT_4747 = gql(`
  fragment Fragment4747 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult4747 = ResultOf<typeof FRAGMENT_4747>;
type FragmentSelf4747 = NonNullable<FragmentResult4747>;

export type FragmentToken4747 =
  | FragmentSelf4747["__typename"]
  | FragmentSelf4747["typenameHint"] | FragmentToken4745 | FragmentToken4746;
