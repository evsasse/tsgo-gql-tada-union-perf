import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken097 } from "./fragment097";
import type { FragmentToken098 } from "./fragment098";

export const FRAGMENT_099 = gql(`
  fragment Fragment099 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult099 = ResultOf<typeof FRAGMENT_099>;
type FragmentSelf099 = NonNullable<FragmentResult099>;

export type FragmentToken099 =
  | FragmentSelf099["__typename"]
  | FragmentSelf099["typenameHint"] | FragmentToken097 | FragmentToken098;
