import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1477 } from "./fragment1477";
import type { FragmentToken1478 } from "./fragment1478";

export const FRAGMENT_1479 = gql(`
  fragment Fragment1479 on Member78 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_78
    memberCount_78
    memberMetric_78
  }
`);

type FragmentResult1479 = ResultOf<typeof FRAGMENT_1479>;
type FragmentSelf1479 = NonNullable<FragmentResult1479>;

export type FragmentToken1479 =
  | FragmentSelf1479["__typename"]
  | FragmentSelf1479["typenameHint"] | FragmentToken1477 | FragmentToken1478;
