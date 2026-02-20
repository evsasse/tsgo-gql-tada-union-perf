import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1748 } from "./fragment1748";
import type { FragmentToken1749 } from "./fragment1749";

export const FRAGMENT_1750 = gql(`
  fragment Fragment1750 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult1750 = ResultOf<typeof FRAGMENT_1750>;
type FragmentSelf1750 = NonNullable<FragmentResult1750>;

export type FragmentToken1750 =
  | FragmentSelf1750["__typename"]
  | FragmentSelf1750["typenameHint"] | FragmentToken1748 | FragmentToken1749;
