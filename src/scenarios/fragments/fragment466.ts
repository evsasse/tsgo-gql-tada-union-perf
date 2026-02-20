import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken464 } from "./fragment464";
import type { FragmentToken465 } from "./fragment465";

export const FRAGMENT_466 = gql(`
  fragment Fragment466 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult466 = ResultOf<typeof FRAGMENT_466>;
type FragmentSelf466 = NonNullable<FragmentResult466>;

export type FragmentToken466 =
  | FragmentSelf466["__typename"]
  | FragmentSelf466["typenameHint"] | FragmentToken464 | FragmentToken465;
