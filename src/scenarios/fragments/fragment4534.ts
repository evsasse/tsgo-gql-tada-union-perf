import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4532 } from "./fragment4532";
import type { FragmentToken4533 } from "./fragment4533";

export const FRAGMENT_4534 = gql(`
  fragment Fragment4534 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult4534 = ResultOf<typeof FRAGMENT_4534>;
type FragmentSelf4534 = NonNullable<FragmentResult4534>;

export type FragmentToken4534 =
  | FragmentSelf4534["__typename"]
  | FragmentSelf4534["typenameHint"] | FragmentToken4532 | FragmentToken4533;
