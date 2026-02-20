import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken304 } from "./fragment304";
import type { FragmentToken305 } from "./fragment305";

export const FRAGMENT_306 = gql(`
  fragment Fragment306 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult306 = ResultOf<typeof FRAGMENT_306>;
type FragmentSelf306 = NonNullable<FragmentResult306>;

export type FragmentToken306 =
  | FragmentSelf306["__typename"]
  | FragmentSelf306["typenameHint"] | FragmentToken304 | FragmentToken305;
