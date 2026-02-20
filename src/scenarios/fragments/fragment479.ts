import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken477 } from "./fragment477";
import type { FragmentToken478 } from "./fragment478";

export const FRAGMENT_479 = gql(`
  fragment Fragment479 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult479 = ResultOf<typeof FRAGMENT_479>;
type FragmentSelf479 = NonNullable<FragmentResult479>;

export type FragmentToken479 =
  | FragmentSelf479["__typename"]
  | FragmentSelf479["typenameHint"] | FragmentToken477 | FragmentToken478;
