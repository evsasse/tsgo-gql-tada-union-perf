import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken624 } from "./fragment624";
import type { FragmentToken625 } from "./fragment625";

export const FRAGMENT_626 = gql(`
  fragment Fragment626 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult626 = ResultOf<typeof FRAGMENT_626>;
type FragmentSelf626 = NonNullable<FragmentResult626>;

export type FragmentToken626 =
  | FragmentSelf626["__typename"]
  | FragmentSelf626["typenameHint"] | FragmentToken624 | FragmentToken625;
