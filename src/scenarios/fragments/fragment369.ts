import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken367 } from "./fragment367";
import type { FragmentToken368 } from "./fragment368";

export const FRAGMENT_369 = gql(`
  fragment Fragment369 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult369 = ResultOf<typeof FRAGMENT_369>;
type FragmentSelf369 = NonNullable<FragmentResult369>;

export type FragmentToken369 =
  | FragmentSelf369["__typename"]
  | FragmentSelf369["typenameHint"] | FragmentToken367 | FragmentToken368;
