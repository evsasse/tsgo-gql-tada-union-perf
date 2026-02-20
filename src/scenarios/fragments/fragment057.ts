import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken055 } from "./fragment055";
import type { FragmentToken056 } from "./fragment056";

export const FRAGMENT_057 = gql(`
  fragment Fragment057 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult057 = ResultOf<typeof FRAGMENT_057>;
type FragmentSelf057 = NonNullable<FragmentResult057>;

export type FragmentToken057 =
  | FragmentSelf057["__typename"]
  | FragmentSelf057["typenameHint"] | FragmentToken055 | FragmentToken056;
