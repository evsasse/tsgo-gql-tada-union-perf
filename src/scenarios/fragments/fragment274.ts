import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken272 } from "./fragment272";
import type { FragmentToken273 } from "./fragment273";

export const FRAGMENT_274 = gql(`
  fragment Fragment274 on Member273 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_273
    memberCount_273
    memberMetric_273
  }
`);

type FragmentResult274 = ResultOf<typeof FRAGMENT_274>;
type FragmentSelf274 = NonNullable<FragmentResult274>;

export type FragmentToken274 =
  | FragmentSelf274["__typename"]
  | FragmentSelf274["typenameHint"] | FragmentToken272 | FragmentToken273;
