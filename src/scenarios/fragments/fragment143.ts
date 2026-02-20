import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken141 } from "./fragment141";
import type { FragmentToken142 } from "./fragment142";

export const FRAGMENT_143 = gql(`
  fragment Fragment143 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult143 = ResultOf<typeof FRAGMENT_143>;
type FragmentSelf143 = NonNullable<FragmentResult143>;

export type FragmentToken143 =
  | FragmentSelf143["__typename"]
  | FragmentSelf143["typenameHint"] | FragmentToken141 | FragmentToken142;
