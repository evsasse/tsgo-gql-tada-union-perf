import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken442 } from "./fragment442";
import type { FragmentToken443 } from "./fragment443";

export const FRAGMENT_444 = gql(`
  fragment Fragment444 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult444 = ResultOf<typeof FRAGMENT_444>;
type FragmentSelf444 = NonNullable<FragmentResult444>;

export type FragmentToken444 =
  | FragmentSelf444["__typename"]
  | FragmentSelf444["typenameHint"] | FragmentToken442 | FragmentToken443;
