import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3365 } from "./fragment3365";
import type { FragmentToken3366 } from "./fragment3366";

export const FRAGMENT_3367 = gql(`
  fragment Fragment3367 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult3367 = ResultOf<typeof FRAGMENT_3367>;
type FragmentSelf3367 = NonNullable<FragmentResult3367>;

export type FragmentToken3367 =
  | FragmentSelf3367["__typename"]
  | FragmentSelf3367["typenameHint"] | FragmentToken3365 | FragmentToken3366;
