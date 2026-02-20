import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1810 } from "./fragment1810";
import type { FragmentToken1811 } from "./fragment1811";

export const FRAGMENT_1812 = gql(`
  fragment Fragment1812 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult1812 = ResultOf<typeof FRAGMENT_1812>;
type FragmentSelf1812 = NonNullable<FragmentResult1812>;

export type FragmentToken1812 =
  | FragmentSelf1812["__typename"]
  | FragmentSelf1812["typenameHint"] | FragmentToken1810 | FragmentToken1811;
