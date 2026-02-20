import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1794 } from "./fragment1794";
import type { FragmentToken1795 } from "./fragment1795";

export const FRAGMENT_1796 = gql(`
  fragment Fragment1796 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult1796 = ResultOf<typeof FRAGMENT_1796>;
type FragmentSelf1796 = NonNullable<FragmentResult1796>;

export type FragmentToken1796 =
  | FragmentSelf1796["__typename"]
  | FragmentSelf1796["typenameHint"] | FragmentToken1794 | FragmentToken1795;
