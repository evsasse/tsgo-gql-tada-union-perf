import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken582 } from "./fragment582";
import type { FragmentToken583 } from "./fragment583";

export const FRAGMENT_584 = gql(`
  fragment Fragment584 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult584 = ResultOf<typeof FRAGMENT_584>;
type FragmentSelf584 = NonNullable<FragmentResult584>;

export type FragmentToken584 =
  | FragmentSelf584["__typename"]
  | FragmentSelf584["typenameHint"] | FragmentToken582 | FragmentToken583;
