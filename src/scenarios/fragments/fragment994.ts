import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken992 } from "./fragment992";
import type { FragmentToken993 } from "./fragment993";

export const FRAGMENT_994 = gql(`
  fragment Fragment994 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult994 = ResultOf<typeof FRAGMENT_994>;
type FragmentSelf994 = NonNullable<FragmentResult994>;

export type FragmentToken994 =
  | FragmentSelf994["__typename"]
  | FragmentSelf994["typenameHint"] | FragmentToken992 | FragmentToken993;
