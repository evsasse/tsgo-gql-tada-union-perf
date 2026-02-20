import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2326 } from "./fragment2326";
import type { FragmentToken2327 } from "./fragment2327";

export const FRAGMENT_2328 = gql(`
  fragment Fragment2328 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult2328 = ResultOf<typeof FRAGMENT_2328>;
type FragmentSelf2328 = NonNullable<FragmentResult2328>;

export type FragmentToken2328 =
  | FragmentSelf2328["__typename"]
  | FragmentSelf2328["typenameHint"] | FragmentToken2326 | FragmentToken2327;
