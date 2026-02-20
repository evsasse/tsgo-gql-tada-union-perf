import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1467 } from "./fragment1467";
import type { FragmentToken1468 } from "./fragment1468";

export const FRAGMENT_1469 = gql(`
  fragment Fragment1469 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult1469 = ResultOf<typeof FRAGMENT_1469>;
type FragmentSelf1469 = NonNullable<FragmentResult1469>;

export type FragmentToken1469 =
  | FragmentSelf1469["__typename"]
  | FragmentSelf1469["typenameHint"] | FragmentToken1467 | FragmentToken1468;
