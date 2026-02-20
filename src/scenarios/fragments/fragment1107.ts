import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1105 } from "./fragment1105";
import type { FragmentToken1106 } from "./fragment1106";

export const FRAGMENT_1107 = gql(`
  fragment Fragment1107 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult1107 = ResultOf<typeof FRAGMENT_1107>;
type FragmentSelf1107 = NonNullable<FragmentResult1107>;

export type FragmentToken1107 =
  | FragmentSelf1107["__typename"]
  | FragmentSelf1107["typenameHint"] | FragmentToken1105 | FragmentToken1106;
