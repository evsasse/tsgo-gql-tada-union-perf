import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken076 } from "./fragment076";
import type { FragmentToken077 } from "./fragment077";

export const FRAGMENT_078 = gql(`
  fragment Fragment078 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult078 = ResultOf<typeof FRAGMENT_078>;
type FragmentSelf078 = NonNullable<FragmentResult078>;

export type FragmentToken078 =
  | FragmentSelf078["__typename"]
  | FragmentSelf078["typenameHint"] | FragmentToken076 | FragmentToken077;
