import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken283 } from "./fragment283";
import type { FragmentToken284 } from "./fragment284";

export const FRAGMENT_285 = gql(`
  fragment Fragment285 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult285 = ResultOf<typeof FRAGMENT_285>;
type FragmentSelf285 = NonNullable<FragmentResult285>;

export type FragmentToken285 =
  | FragmentSelf285["__typename"]
  | FragmentSelf285["typenameHint"] | FragmentToken283 | FragmentToken284;
