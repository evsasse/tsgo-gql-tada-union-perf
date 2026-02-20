import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1334 } from "./fragment1334";
import type { FragmentToken1335 } from "./fragment1335";

export const FRAGMENT_1336 = gql(`
  fragment Fragment1336 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult1336 = ResultOf<typeof FRAGMENT_1336>;
type FragmentSelf1336 = NonNullable<FragmentResult1336>;

export type FragmentToken1336 =
  | FragmentSelf1336["__typename"]
  | FragmentSelf1336["typenameHint"] | FragmentToken1334 | FragmentToken1335;
