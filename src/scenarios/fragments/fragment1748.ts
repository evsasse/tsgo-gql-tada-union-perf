import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1746 } from "./fragment1746";
import type { FragmentToken1747 } from "./fragment1747";

export const FRAGMENT_1748 = gql(`
  fragment Fragment1748 on Member67 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_67
    memberCount_67
    memberMetric_67
  }
`);

type FragmentResult1748 = ResultOf<typeof FRAGMENT_1748>;
type FragmentSelf1748 = NonNullable<FragmentResult1748>;

export type FragmentToken1748 =
  | FragmentSelf1748["__typename"]
  | FragmentSelf1748["typenameHint"] | FragmentToken1746 | FragmentToken1747;
