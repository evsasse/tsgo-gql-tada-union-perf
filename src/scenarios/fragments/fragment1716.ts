import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1714 } from "./fragment1714";
import type { FragmentToken1715 } from "./fragment1715";

export const FRAGMENT_1716 = gql(`
  fragment Fragment1716 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult1716 = ResultOf<typeof FRAGMENT_1716>;
type FragmentSelf1716 = NonNullable<FragmentResult1716>;

export type FragmentToken1716 =
  | FragmentSelf1716["__typename"]
  | FragmentSelf1716["typenameHint"] | FragmentToken1714 | FragmentToken1715;
