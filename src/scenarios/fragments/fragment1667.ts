import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1665 } from "./fragment1665";
import type { FragmentToken1666 } from "./fragment1666";

export const FRAGMENT_1667 = gql(`
  fragment Fragment1667 on Member266 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_266
    memberCount_266
    memberMetric_266
  }
`);

type FragmentResult1667 = ResultOf<typeof FRAGMENT_1667>;
type FragmentSelf1667 = NonNullable<FragmentResult1667>;

export type FragmentToken1667 =
  | FragmentSelf1667["__typename"]
  | FragmentSelf1667["typenameHint"] | FragmentToken1665 | FragmentToken1666;
