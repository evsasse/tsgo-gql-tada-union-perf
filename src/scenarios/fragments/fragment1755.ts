import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1753 } from "./fragment1753";
import type { FragmentToken1754 } from "./fragment1754";

export const FRAGMENT_1755 = gql(`
  fragment Fragment1755 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult1755 = ResultOf<typeof FRAGMENT_1755>;
type FragmentSelf1755 = NonNullable<FragmentResult1755>;

export type FragmentToken1755 =
  | FragmentSelf1755["__typename"]
  | FragmentSelf1755["typenameHint"] | FragmentToken1753 | FragmentToken1754;
