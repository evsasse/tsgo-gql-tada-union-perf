import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken623 } from "./fragment623";
import type { FragmentToken624 } from "./fragment624";

export const FRAGMENT_625 = gql(`
  fragment Fragment625 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult625 = ResultOf<typeof FRAGMENT_625>;
type FragmentSelf625 = NonNullable<FragmentResult625>;

export type FragmentToken625 =
  | FragmentSelf625["__typename"]
  | FragmentSelf625["typenameHint"] | FragmentToken623 | FragmentToken624;
