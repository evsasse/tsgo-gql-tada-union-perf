import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken269 } from "./fragment269";
import type { FragmentToken270 } from "./fragment270";

export const FRAGMENT_271 = gql(`
  fragment Fragment271 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult271 = ResultOf<typeof FRAGMENT_271>;
type FragmentSelf271 = NonNullable<FragmentResult271>;

export type FragmentToken271 =
  | FragmentSelf271["__typename"]
  | FragmentSelf271["typenameHint"] | FragmentToken269 | FragmentToken270;
