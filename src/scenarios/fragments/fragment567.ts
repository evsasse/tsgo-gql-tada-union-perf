import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken565 } from "./fragment565";
import type { FragmentToken566 } from "./fragment566";

export const FRAGMENT_567 = gql(`
  fragment Fragment567 on Member06 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_06
    memberCount_06
    memberMetric_06
  }
`);

type FragmentResult567 = ResultOf<typeof FRAGMENT_567>;
type FragmentSelf567 = NonNullable<FragmentResult567>;

export type FragmentToken567 =
  | FragmentSelf567["__typename"]
  | FragmentSelf567["typenameHint"] | FragmentToken565 | FragmentToken566;
