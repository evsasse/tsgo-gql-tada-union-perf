import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken473 } from "./fragment473";
import type { FragmentToken474 } from "./fragment474";

export const FRAGMENT_475 = gql(`
  fragment Fragment475 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult475 = ResultOf<typeof FRAGMENT_475>;
type FragmentSelf475 = NonNullable<FragmentResult475>;

export type FragmentToken475 =
  | FragmentSelf475["__typename"]
  | FragmentSelf475["typenameHint"] | FragmentToken473 | FragmentToken474;
