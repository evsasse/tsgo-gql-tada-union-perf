import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken833 } from "./fragment833";
import type { FragmentToken834 } from "./fragment834";

export const FRAGMENT_835 = gql(`
  fragment Fragment835 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult835 = ResultOf<typeof FRAGMENT_835>;
type FragmentSelf835 = NonNullable<FragmentResult835>;

export type FragmentToken835 =
  | FragmentSelf835["__typename"]
  | FragmentSelf835["typenameHint"] | FragmentToken833 | FragmentToken834;
