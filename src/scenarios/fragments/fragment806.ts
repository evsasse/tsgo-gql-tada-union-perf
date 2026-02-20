import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken804 } from "./fragment804";
import type { FragmentToken805 } from "./fragment805";

export const FRAGMENT_806 = gql(`
  fragment Fragment806 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult806 = ResultOf<typeof FRAGMENT_806>;
type FragmentSelf806 = NonNullable<FragmentResult806>;

export type FragmentToken806 =
  | FragmentSelf806["__typename"]
  | FragmentSelf806["typenameHint"] | FragmentToken804 | FragmentToken805;
