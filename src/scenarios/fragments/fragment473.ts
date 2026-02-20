import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken471 } from "./fragment471";
import type { FragmentToken472 } from "./fragment472";

export const FRAGMENT_473 = gql(`
  fragment Fragment473 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult473 = ResultOf<typeof FRAGMENT_473>;
type FragmentSelf473 = NonNullable<FragmentResult473>;

export type FragmentToken473 =
  | FragmentSelf473["__typename"]
  | FragmentSelf473["typenameHint"] | FragmentToken471 | FragmentToken472;
