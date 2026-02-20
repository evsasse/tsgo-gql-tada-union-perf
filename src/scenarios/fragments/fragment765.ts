import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken763 } from "./fragment763";
import type { FragmentToken764 } from "./fragment764";

export const FRAGMENT_765 = gql(`
  fragment Fragment765 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult765 = ResultOf<typeof FRAGMENT_765>;
type FragmentSelf765 = NonNullable<FragmentResult765>;

export type FragmentToken765 =
  | FragmentSelf765["__typename"]
  | FragmentSelf765["typenameHint"] | FragmentToken763 | FragmentToken764;
