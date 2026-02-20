import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken858 } from "./fragment858";
import type { FragmentToken859 } from "./fragment859";

export const FRAGMENT_860 = gql(`
  fragment Fragment860 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult860 = ResultOf<typeof FRAGMENT_860>;
type FragmentSelf860 = NonNullable<FragmentResult860>;

export type FragmentToken860 =
  | FragmentSelf860["__typename"]
  | FragmentSelf860["typenameHint"] | FragmentToken858 | FragmentToken859;
