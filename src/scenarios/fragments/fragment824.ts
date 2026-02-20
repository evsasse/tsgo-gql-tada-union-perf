import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken822 } from "./fragment822";
import type { FragmentToken823 } from "./fragment823";

export const FRAGMENT_824 = gql(`
  fragment Fragment824 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult824 = ResultOf<typeof FRAGMENT_824>;
type FragmentSelf824 = NonNullable<FragmentResult824>;

export type FragmentToken824 =
  | FragmentSelf824["__typename"]
  | FragmentSelf824["typenameHint"] | FragmentToken822 | FragmentToken823;
