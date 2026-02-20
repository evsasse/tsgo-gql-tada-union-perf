import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken762 } from "./fragment762";
import type { FragmentToken763 } from "./fragment763";

export const FRAGMENT_764 = gql(`
  fragment Fragment764 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult764 = ResultOf<typeof FRAGMENT_764>;
type FragmentSelf764 = NonNullable<FragmentResult764>;

export type FragmentToken764 =
  | FragmentSelf764["__typename"]
  | FragmentSelf764["typenameHint"] | FragmentToken762 | FragmentToken763;
