import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3469 } from "./fragment3469";
import type { FragmentToken3470 } from "./fragment3470";

export const FRAGMENT_3471 = gql(`
  fragment Fragment3471 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult3471 = ResultOf<typeof FRAGMENT_3471>;
type FragmentSelf3471 = NonNullable<FragmentResult3471>;

export type FragmentToken3471 =
  | FragmentSelf3471["__typename"]
  | FragmentSelf3471["typenameHint"] | FragmentToken3469 | FragmentToken3470;
