import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4692 } from "./fragment4692";
import type { FragmentToken4693 } from "./fragment4693";

export const FRAGMENT_4694 = gql(`
  fragment Fragment4694 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult4694 = ResultOf<typeof FRAGMENT_4694>;
type FragmentSelf4694 = NonNullable<FragmentResult4694>;

export type FragmentToken4694 =
  | FragmentSelf4694["__typename"]
  | FragmentSelf4694["typenameHint"] | FragmentToken4692 | FragmentToken4693;
