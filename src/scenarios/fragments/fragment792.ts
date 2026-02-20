import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken790 } from "./fragment790";
import type { FragmentToken791 } from "./fragment791";

export const FRAGMENT_792 = gql(`
  fragment Fragment792 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult792 = ResultOf<typeof FRAGMENT_792>;
type FragmentSelf792 = NonNullable<FragmentResult792>;

export type FragmentToken792 =
  | FragmentSelf792["__typename"]
  | FragmentSelf792["typenameHint"] | FragmentToken790 | FragmentToken791;
