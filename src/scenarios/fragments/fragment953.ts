import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken951 } from "./fragment951";
import type { FragmentToken952 } from "./fragment952";

export const FRAGMENT_953 = gql(`
  fragment Fragment953 on Member112 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_112
    memberCount_112
    memberMetric_112
  }
`);

type FragmentResult953 = ResultOf<typeof FRAGMENT_953>;
type FragmentSelf953 = NonNullable<FragmentResult953>;

export type FragmentToken953 =
  | FragmentSelf953["__typename"]
  | FragmentSelf953["typenameHint"] | FragmentToken951 | FragmentToken952;
