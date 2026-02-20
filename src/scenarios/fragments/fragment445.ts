import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken443 } from "./fragment443";
import type { FragmentToken444 } from "./fragment444";

export const FRAGMENT_445 = gql(`
  fragment Fragment445 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult445 = ResultOf<typeof FRAGMENT_445>;
type FragmentSelf445 = NonNullable<FragmentResult445>;

export type FragmentToken445 =
  | FragmentSelf445["__typename"]
  | FragmentSelf445["typenameHint"] | FragmentToken443 | FragmentToken444;
