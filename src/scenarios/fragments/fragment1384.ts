import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1382 } from "./fragment1382";
import type { FragmentToken1383 } from "./fragment1383";

export const FRAGMENT_1384 = gql(`
  fragment Fragment1384 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult1384 = ResultOf<typeof FRAGMENT_1384>;
type FragmentSelf1384 = NonNullable<FragmentResult1384>;

export type FragmentToken1384 =
  | FragmentSelf1384["__typename"]
  | FragmentSelf1384["typenameHint"] | FragmentToken1382 | FragmentToken1383;
