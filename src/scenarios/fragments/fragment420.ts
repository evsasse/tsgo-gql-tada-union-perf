import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken418 } from "./fragment418";
import type { FragmentToken419 } from "./fragment419";

export const FRAGMENT_420 = gql(`
  fragment Fragment420 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult420 = ResultOf<typeof FRAGMENT_420>;
type FragmentSelf420 = NonNullable<FragmentResult420>;

export type FragmentToken420 =
  | FragmentSelf420["__typename"]
  | FragmentSelf420["typenameHint"] | FragmentToken418 | FragmentToken419;
