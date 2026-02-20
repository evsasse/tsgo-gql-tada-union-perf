import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken270 } from "./fragment270";
import type { FragmentToken271 } from "./fragment271";

export const FRAGMENT_272 = gql(`
  fragment Fragment272 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult272 = ResultOf<typeof FRAGMENT_272>;
type FragmentSelf272 = NonNullable<FragmentResult272>;

export type FragmentToken272 =
  | FragmentSelf272["__typename"]
  | FragmentSelf272["typenameHint"] | FragmentToken270 | FragmentToken271;
