import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1752 } from "./fragment1752";
import type { FragmentToken1753 } from "./fragment1753";

export const FRAGMENT_1754 = gql(`
  fragment Fragment1754 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult1754 = ResultOf<typeof FRAGMENT_1754>;
type FragmentSelf1754 = NonNullable<FragmentResult1754>;

export type FragmentToken1754 =
  | FragmentSelf1754["__typename"]
  | FragmentSelf1754["typenameHint"] | FragmentToken1752 | FragmentToken1753;
