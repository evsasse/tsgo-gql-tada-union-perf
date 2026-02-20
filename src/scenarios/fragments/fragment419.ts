import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken417 } from "./fragment417";
import type { FragmentToken418 } from "./fragment418";

export const FRAGMENT_419 = gql(`
  fragment Fragment419 on Member138 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_138
    memberCount_138
    memberMetric_138
  }
`);

type FragmentResult419 = ResultOf<typeof FRAGMENT_419>;
type FragmentSelf419 = NonNullable<FragmentResult419>;

export type FragmentToken419 =
  | FragmentSelf419["__typename"]
  | FragmentSelf419["typenameHint"] | FragmentToken417 | FragmentToken418;
