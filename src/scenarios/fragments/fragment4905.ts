import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4903 } from "./fragment4903";
import type { FragmentToken4904 } from "./fragment4904";

export const FRAGMENT_4905 = gql(`
  fragment Fragment4905 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult4905 = ResultOf<typeof FRAGMENT_4905>;
type FragmentSelf4905 = NonNullable<FragmentResult4905>;

export type FragmentToken4905 =
  | FragmentSelf4905["__typename"]
  | FragmentSelf4905["typenameHint"] | FragmentToken4903 | FragmentToken4904;
