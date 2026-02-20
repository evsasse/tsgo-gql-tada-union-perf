import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3470 } from "./fragment3470";
import type { FragmentToken3471 } from "./fragment3471";

export const FRAGMENT_3472 = gql(`
  fragment Fragment3472 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult3472 = ResultOf<typeof FRAGMENT_3472>;
type FragmentSelf3472 = NonNullable<FragmentResult3472>;

export type FragmentToken3472 =
  | FragmentSelf3472["__typename"]
  | FragmentSelf3472["typenameHint"] | FragmentToken3470 | FragmentToken3471;
