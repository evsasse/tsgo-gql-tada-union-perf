import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken070 } from "./fragment070";
import type { FragmentToken071 } from "./fragment071";

export const FRAGMENT_072 = gql(`
  fragment Fragment072 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult072 = ResultOf<typeof FRAGMENT_072>;
type FragmentSelf072 = NonNullable<FragmentResult072>;

export type FragmentToken072 =
  | FragmentSelf072["__typename"]
  | FragmentSelf072["typenameHint"] | FragmentToken070 | FragmentToken071;
